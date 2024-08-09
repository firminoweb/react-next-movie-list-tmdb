// Components
export interface CardSkeletonProps {
    cards: number;
}
export interface HomePageProps {
    path: string;
    propsData: {
        title: string;
        desc: string;
        placeholder: string;
        cardTitle: string;
    };
}

export interface DataItemCard {
    id: string | number;
    title?: string;
    name?: string;
    media_type?: string;
    poster_path: string;
}

export interface PropsData {
    cardTitle: string;
}

export interface CardProps {
    datas: DataItemCard[];
    propsData: PropsData;
    onResetData: () => void;
    isLoading: boolean;
}

export interface DataItemBanner {
    id: string | number;
    title?: string;
    name?: string;
    media_type?: string;
    backdrop_path?: string;
}
  
export interface PropsDataBanner {
    title: string;
    desc: string;
    placeholder: string;
}
  
export interface BannerProps {
    datas: DataItemBanner[];
    propsData: PropsDataBanner;
    onSearch: (searchTerm: string) => void;
    isLoading: boolean;
}

export interface Route {
    popular: string;
    topRated: string;
    upComing?: string;
    onTheAir?: string;
}
  
export interface ListContentProps {
    isHovered: boolean;
    route: Route;
}

export interface DetailPageProps {
    detailData: {
      id: number;
      title?: string;
      name?: string;
      release_date?: string;
      last_air_date?: string;
      poster_path: string;
      backdrop_path?: string;
      homepage?: string;
      status?: string;
      tagline?: string;
      overview?: string;
      genres: { id: number; name: string }[];
      runtime?: number;
      media_type?: string;
      production_companies: { id: number; name: string; logo_path?: string }[];
    };
}

export interface DetailData {
    tagline?: string;
    genres: { id: number; name: string }[];
    overview?: string;
    runtime?: number;
    production_companies: { id: number; name: string; logo_path?: string }[];
}
  
export interface MoreDetailsProps {
    detailData: DetailData;
}
  
export interface CompanyLogoProps {
    logoPath?: string;
    name: string;
}

export interface DetailsData {
    backdrop_path?: string;
    homepage?: string;
    poster_path?: string;
    title?: string;
    name?: string;
    release_date?: string;
    last_air_date?: string;
    status?: string;
    genres: { id: number; name: string }[];
    tagline?: string;
    overview?: string;
}
  
export interface DetailProps {
    detailData: DetailsData;
}

// App

export interface DataItem {
    id: string | number;
    title?: string;
    name?: string;
    media_type?: string;
    poster_path: string;  // Remove o `| undefined` aqui
    [key: string]: any;
}

export interface SeriesDetailProps {
    params: {
      id: string;
    };
}
  
export interface DataItemSerie {
    id: string | number;
    title?: string;
    name?: string;
    media_type?: string;
    poster_path: string;
    [key: string]: any;
}
  
export interface ProductionCompany {
    id: number;
    name: string;
    logo_path?: string;
}
    
export interface DetailDataSerie {
    id: number;
    title?: string;
    name?: string;
    release_date?: string;
    last_air_date?: string;
    poster_path: string;
    backdrop_path?: string;
    homepage?: string;
    status?: string;
    tagline?: string;
    overview?: string;
    runtime?: number;
    genres: { id: number; name: string }[];
    production_companies: ProductionCompany[];
}

