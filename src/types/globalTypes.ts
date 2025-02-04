export interface Component {
  id: number;
  component_type: "title" | "text" | "image"; // Add other possible component types if needed
  content_value: string | null;
  image_large: string | null;
  image_medium: string | null;
  image_small: string | null;
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
  status: "draft" | "published"; // Ensuring valid status values
  sections: Section[];
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
}
