create table if not exists reports (
  id text primary key,
  seafarer_id text not null,
  ship_name text,
  language text not null,
  reported_at text not null,
  received_at text not null,
  status text not null,
  result_json text,
  failure text
);

create table if not exists ship_cases (
  ship_key text primary key,
  ship_name text not null,
  risk_level text not null,
  report_count integer not null,
  wages_owed_total real not null,
  case_status text not null,
  taken_by text,
  updated_at text not null
);
