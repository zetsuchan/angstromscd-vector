import { ChromaApi, OpenAIEmbeddingFunction } from 'chromadb'

export class VectorService {
  private client: ChromaApi
  private embedder: OpenAIEmbeddingFunction

  constructor() {
    this.client = new ChromaApi({
      path: process.env.CHROMA_URL || "http://localhost:8000"
    })
    
    this.embedder = new OpenAIEmbeddingFunction({
      openai_api_key: process.env.OPENAI_API_KEY || ""
    })
  }

  async createCollection(name: string) {
    return await this.client.createCollection({
      name,
      embeddingFunction: this.embedder
    })
  }
}
