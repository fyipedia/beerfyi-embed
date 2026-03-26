/**
 * beerfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for BeerFYI */
      'beerfyi'?: 'recipe' | 'compare' | 'glossary' | 'faq' | 'guide' | 'ingredient' | 'pairing' | 'search' | 'flavor-radar' | 'color-swatch' | 'abv-calculator';
      /** Entity slug (e.g. "styles") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'classic';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
