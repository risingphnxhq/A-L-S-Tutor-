-- Parent-owned grade profiles for routing learners to the correct RPE tutor.
-- No child name, email, or AI conversation is stored here.
create table if not exists public.als_learner_profiles (
  id uuid primary key default gen_random_uuid(),
  guardian_id uuid not null references auth.users(id) on delete cascade,
  grade_level smallint not null check (grade_level = 3 or grade_level between 9 and 12),
  created_at timestamptz not null default now()
);

create index if not exists als_learner_profiles_guardian_id_idx
  on public.als_learner_profiles (guardian_id);

alter table public.als_learner_profiles enable row level security;
revoke all on public.als_learner_profiles from anon, public;
grant select, insert, update, delete on public.als_learner_profiles to authenticated;

create policy "guardians can read their learner profiles"
  on public.als_learner_profiles for select to authenticated
  using (guardian_id = (select auth.uid()));

create policy "guardians can create their learner profiles"
  on public.als_learner_profiles for insert to authenticated
  with check (guardian_id = (select auth.uid()));

create policy "guardians can update their learner profiles"
  on public.als_learner_profiles for update to authenticated
  using (guardian_id = (select auth.uid()))
  with check (guardian_id = (select auth.uid()));

create policy "guardians can delete their learner profiles"
  on public.als_learner_profiles for delete to authenticated
  using (guardian_id = (select auth.uid()));
