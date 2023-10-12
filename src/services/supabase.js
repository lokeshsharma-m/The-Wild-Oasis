
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wzmrluondbtptfvdnqqv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6bXJsdW9uZGJ0cHRmdmRucXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMjgzMzQsImV4cCI6MjAxMDgwNDMzNH0.4re72HvA-ANxamkysKRULI4_sJIDf8hMrJKoq6Kqcx4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;