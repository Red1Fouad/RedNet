create table comments (
    id uuid not null primary key,
    user_id uuid not null references auth.users on delete cascade,
    post_id uuid not null references posts ON DELETE cascade,
    content text not null,
    image_url text null,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

