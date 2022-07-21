export interface ITag {
    id: number;
    title: string;
    definition: string;
    shortInfo: string;
    additionalInfo: string | HTMLTemplateElement;
    topicId: number;
  }
  
  export interface ITopic {
    id: number;
    name: string;
    additionalInfo: string;
  }