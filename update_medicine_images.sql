-- Run this script in the Supabase SQL Editor to instantly map all 54 medicines to their AI-generated images.

-- 1. Tablets
UPDATE public.products 
SET img = 'images/meds/tablet.png' 
WHERE form = 'Tablets';

-- 2. Capsules
UPDATE public.products 
SET img = 'images/meds/capsule.png' 
WHERE form = 'Capsules';

-- 3. Syrups & Suspensions & Drops
UPDATE public.products 
SET img = 'images/meds/syrup.png' 
WHERE form IN ('Syrup', 'Suspension', 'Drops');

-- 4. Creams, Ointments, Gels, Powders, Soaps
UPDATE public.products 
SET img = 'images/meds/ointment.png' 
WHERE form IN ('Cream', 'Ointment', 'Gel', 'Powder', 'Soap', 'Shampoo', 'Lotion', 'Mouth Wash');

-- 5. Injections
UPDATE public.products 
SET img = 'images/meds/injection.png' 
WHERE form = 'Injection';

-- 6. Fallback for any missed categories (uses the generic tablet image as a placeholder instead of an empty box)
UPDATE public.products 
SET img = 'images/meds/tablet.png' 
WHERE img IS NULL OR img = '';
