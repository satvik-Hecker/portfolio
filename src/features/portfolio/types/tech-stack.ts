export interface TechStack {
  key: string;
  title: string;
  /** svgl.app library slug, or a full URL for logos hosted elsewhere */
  iconSlug: string;
  /** Dark mode variant, for logos that would disappear on a dark background */
  iconSlugDark?: string;
}