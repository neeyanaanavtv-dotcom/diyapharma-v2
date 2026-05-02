-- Clear broken image URLs (they'll show placeholder until you upload to Supabase Storage)
UPDATE public.diaper_products 
SET image_main = '', image_side = '', image_back = '', image_top = '', image_pack = '';
