export interface SocialChainPost {
  id: string;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  reposts: number;
  previousPostId?: string; // Reference to the previous post in the chain
  nextPostId?: string;    // Reference to the next post in the chain
  chainId: string;        // Unique identifier for the entire chain
  chainPosition: number;  // Position in the chain (1 being the first post)
}

export interface SocialChain {
  id: string;
  title: string;
  posts: SocialChainPost[];
  createdAt: string;
  updatedAt: string;
  totalPosts: number;
  totalEngagement: number;
} 