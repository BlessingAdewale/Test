export interface carouselDataType {
  item: {
    id: string;
    text: string;
    image: number;
  };
}

export interface headerDataType{
  id: string,
  title: string
}

export interface AllDataType {
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
}
