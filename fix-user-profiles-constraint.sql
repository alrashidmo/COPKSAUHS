-- ===================================
-- Fix user_profiles table constraints
-- Adds unique constraint on user_id for ON CONFLICT to work
-- ===================================

-- Add unique constraint on user_id if it doesn't exist
-- This allows ON CONFLICT (user_id) to work in the approve function

-- First, check if constraint already exists and drop it if needed
DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'user_profiles_user_id_key'
    ) THEN
        ALTER TABLE user_profiles DROP CONSTRAINT user_profiles_user_id_key;
    END IF;
END $$;

-- Now add the unique constraint
ALTER TABLE user_profiles
ADD CONSTRAINT user_profiles_user_id_key UNIQUE (user_id);

SELECT '✅ Unique constraint added to user_profiles.user_id!' AS status;
