import {EdgeExtractorService} from './edge-extractor.service';
import {NodeExtractorService} from './node-extractor.service';
import {Graph} from '../model/graph.model';
import {Edge} from '../model/edge.model';
import {Node} from '../model/node.model';
import {AngularModule} from '../model/angular-module.model';
export class GraphExtractorService {
    private nodesService: NodeExtractorService;
    private edgesService: EdgeExtractorService;


    constructor() {
        this.nodesService = new NodeExtractorService();
        this.edgesService = new EdgeExtractorService();
    }

  public computeGraph(modules: AngularModule[]): Graph {
    let nodes = [];
    let edges = [];
    for (const module of modules) {
      nodes.push(...this.nodesService.extractModule(module));
      edges.push(...this.edgesService.extractModule(module));
    }
    // remove duplicates
    const nodeArray = new Set<Node>(nodes);
    const edgesArray = new Set<Edge>(edges);

    return new Graph({
      edges: Array.from(edgesArray.values()),
      nodes: Array.from(nodeArray.values())
    });
  }
}