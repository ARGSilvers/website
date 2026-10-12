/**
 * Adaptive Bento / Mosaic Grid Layout Helper
 * Computes dynamic CSS Grid column and row spans based on the actual image aspect ratio,
 * prominence, and position to create a luxury editorial layout with optimal image visibility.
 */

export type ProductAspectRatio = 'square' | 'portrait' | 'landscape';

/**
 * Returns CSS grid span classes for a product card based on the actual image aspect ratio.
 * - Landscape images (plates, crowns, wide vessels): 2 columns wide for panoramic prominence.
 * - Portrait images (lamps, kavasams, Amman faces): 2 rows tall for majestic vertical height.
 * - Square images (Panjapathiram, Padi): 1x1 balanced square.
 */
export function getProductBentoClass(
  aspectRatio: ProductAspectRatio | undefined,
  index: number,
  total: number
): string {
  // If small collection (1-3 items), keep uniform balanced grid
  if (total <= 3) {
    if (total === 1) return "col-span-full row-span-1";
    if (total === 2 && aspectRatio === "landscape") return "sm:col-span-2 lg:col-span-2";
    return "col-span-1 row-span-1";
  }

  // If landscape image: give wide 2-column span for great viewing width
  if (aspectRatio === "landscape") {
    return "sm:col-span-2 lg:col-span-2 lg:row-span-1";
  }

  // If portrait image: prominent tall items get row-span-2
  if (aspectRatio === "portrait") {
    // Strategically feature every 2nd or 3rd portrait so grid remains balanced
    const isFeatured = index % 3 === 0 || (index % 5 === 1 && total > 6);
    if (isFeatured) {
      return "sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2";
    }
    return "col-span-1 row-span-1";
  }

  // Square or unspecified: standard 1x1
  return "col-span-1 row-span-1";
}

/**
 * Returns CSS grid span classes for manufacturing documentary workshop photos.
 */
export function getManufacturingBentoClass(
  index: number,
  total: number,
  highlight?: boolean
): string {
  if (total <= 3) return "col-span-1 row-span-1";

  // Featured / Highlight workshop shots get prominent spans
  if (highlight) {
    if (index === 0) {
      // First hero workshop overview spans 2 cols
      return "sm:col-span-2 lg:col-span-2 lg:row-span-1";
    }
    if (index % 4 === 1) {
      return "sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2";
    }
    if (index % 4 === 2) {
      return "sm:col-span-2 lg:col-span-2 lg:row-span-1";
    }
  }

  // Periodic rhythm for remaining items
  const mod = index % 6;
  if (mod === 1 && total >= 6) {
    return "sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2";
  }
  if (mod === 4 && total >= 6) {
    return "sm:col-span-2 lg:col-span-2 lg:row-span-1";
  }

  return "col-span-1 row-span-1";
}

// Backward-compatible alias
export function getBentoClass(index: number, total: number): string {
  return getManufacturingBentoClass(index, total, true);
}
