export interface SliderImage {
  id: number;
  image: string;
  url: string;
}
export interface Component {
  id: number;
  component_type: "title" | "text" | "image" | "slider" | "sub-title";
  content_value_tr: string | null;
  content_value_en: string | null;
  component: Component[] | null;
  images: SliderImage[] | null;
}

export interface Section {
  id: number;
  title: string;
  position: number;
  components: Component[];
}

export interface Page {
  id: number;
  title: string;
  slug: string;
  status: "draft" | "published";
  sections: Section[];
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}
