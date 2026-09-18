import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://edswdayojeaarcwvrqmf.supabase.co';
const supabaseKey = 'sb_publishable_0Cpyt1HdOZma_EeUZve4Lg_d6oujbxp';

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
