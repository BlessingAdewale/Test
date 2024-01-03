export interface carouselDataType {
  item: {
    id: string;
    text: string;
    image: number;
  };
}

export interface AllDataType {
  data: {
    data: ArrayLike<any> | null | undefined;
    title: any;
    id: string;
    name: string;
    rated: string;
    numberOfPeopleThatRated: string;
    image: number;
    price: string;
    seller: string;
    note: string;
    warehouseDistribution: {
      name: string;
      weight: string;
    };
    warehouseCertificate: {
      title: string;
    };
    
  };
}
