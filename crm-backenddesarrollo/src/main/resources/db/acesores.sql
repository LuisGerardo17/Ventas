-- SEQUENCE: public.acesores_acesor_id_seq

-- DROP SEQUENCE public.acesores_acesor_id_seq;

CREATE SEQUENCE public.acesores_acesor_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.acesores_acesor_id_seq
    OWNER TO postgres;





-- Table: public.acesores

-- DROP TABLE public.acesores;

CREATE TABLE public.acesores
(
    acesor_id integer NOT NULL DEFAULT nextval('acesores_acesor_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    telefono character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    equipoid character varying COLLATE pg_catalog."default",
    enabled boolean,
    created time with time zone,
    updated time with time zone,
    CONSTRAINT acesores_pkey PRIMARY KEY (acesor_id)
)

TABLESPACE pg_default;

ALTER TABLE public.acesores
    OWNER to postgres;


