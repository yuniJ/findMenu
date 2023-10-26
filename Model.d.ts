declare module Model {
  export interface Items {
    id: number;
    attributes: {
      menuName: string | null;
      menuThumb: string | null;
      menuInfo: string | null;
      createdAt: string | null;
      updatedAt: string | null;
      publishedAt: string | null;
      menuPrice: number;
      menuNewState: boolean;
      menuSellState: boolean;
    };
  }
  export interface Cateogories {
    id: number;
    attributes: {
      category: string | null;
      createdAt: string | null;
      updatedAt: string | null;
      publishedAt: string | null;
    };
  }
}
