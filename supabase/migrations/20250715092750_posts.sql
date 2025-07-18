create table posts (
    id uuid not null primary key default gen_random_uuid (),
    user_id uuid not null references auth.users on delete cascade,
    content text not null,
    image_url text null,
    created_at timestamp  default now(),
    updated_at timestamp  default now()
);

