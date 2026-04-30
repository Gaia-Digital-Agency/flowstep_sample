-- Run once on gda-s01 as the postgres superuser:
--   sudo -u postgres psql -f /tmp/init.sql
--
-- Creates the flowstep DB and role used by Payload's pg adapter.

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'flowstep') THEN
    CREATE ROLE flowstep WITH LOGIN PASSWORD 'CHANGE_ME_BEFORE_RUN';
  END IF;
END
$$;

CREATE DATABASE flowstep OWNER flowstep ENCODING 'UTF8' LC_COLLATE 'C' LC_CTYPE 'C' TEMPLATE template0;

\connect flowstep
GRANT ALL PRIVILEGES ON DATABASE flowstep TO flowstep;
GRANT ALL ON SCHEMA public TO flowstep;
ALTER SCHEMA public OWNER TO flowstep;
