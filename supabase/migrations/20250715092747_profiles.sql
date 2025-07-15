create table profiles (
    id uuid not null REFERENCES auth.users on delete cascade,
    username text,
    email text,
    avatarUrl text,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    primary key (id)
);

create or replace function public.fn_add_profile_on_signup()
    returns trigger
    language plpgsql
    security definer
    set search_path = public, pg_temp
as $$
begin
    insert into public.profiles (id, username, email, avatarUrl)
    values (
        new.id,  
        new.raw_user_meta_data ->> 'user_name',
        new.raw_user_meta_data ->> 'email',
        new.raw_user_meta_data ->> 'avatar_url'
    );
    return new;
end;
$$;

drop trigger if exists add_profile_on_signup on auth.users;

create trigger add_profile_on_signup
    after insert on auth.users
    for each row execute function public.fn_add_profile_on_signup();
