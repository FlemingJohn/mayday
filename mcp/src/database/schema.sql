create table if not exists ships (
  imo_number text primary key,
  name text not null,
  ship_type text not null,
  flag text not null,
  owner_name text not null
);

create table if not exists inspections (
  imo_number text not null,
  inspected_on text not null,
  port text not null,
  authority text not null,
  is_detained integer not null
);

create table if not exists flag_changes (
  imo_number text not null,
  changed_on text not null,
  from_flag text not null,
  to_flag text not null
);

create table if not exists abandonment_cases (
  imo_number text not null,
  ship_name text not null,
  owner_name text not null,
  reported_on text not null,
  status text not null,
  crew_count integer not null
);
