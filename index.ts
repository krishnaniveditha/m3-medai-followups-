export interface FollowUpPayload {
  items: string[];
  createdAt: number;
}

export interface AgentQuestions {
  text: string;
  createdAt: number;
}

export interface ClientToServerEvents {
  "followup:create": (data: FollowUpPayload) => void;
}

export interface ServerToClientEvents {
  "agent:questions": (data: AgentQuestions) => void;
}
