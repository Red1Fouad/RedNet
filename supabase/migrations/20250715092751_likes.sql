create table likes (
    id uuid not null primary key,
    user_id uuid not null references auth.users on delete cascade,
    post_id uuid not null references posts on delete cascade,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

