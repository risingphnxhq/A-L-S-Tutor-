# A. L. S. Tutor family login and grade routing

The login portal uses the existing Angela Learning Engine Supabase project (`tgqxwvdjijiftroqbgmg`) under the Rising Phoenix Enterprises Free organization.

## Account model

- A parent or guardian signs in using an email magic link.
- The child does not need an email address or password.
- The profile stores a random ID and grade level only. It does not store a child's name, email, or AI tutor conversation.
- Grade 3 routes to Angela Learning Engine. Grades 9–12 route to A. L. S. Tutor.
- The same parent email is used on devices that need access to the family profiles.

## Activation requirements

1. Restore the existing ALE Supabase project in the Supabase Dashboard. It is currently inactive because the organization has reached the Free plan active-project limit.
2. Apply `supabase/migrations/20261005090000_als_learner_profiles.sql` to that project.
3. Retrieve a publishable key for the project and place it in `site/supabase-config.js`. Never place a `service_role` key in browser code.
4. In Supabase Auth URL configuration, allow `https://alstutor.com/login.html` as a redirect URL.
5. Set the confirmed Grade 3 ALE website URL in `site/supabase-config.js`. The Grade 3 route intentionally remains unset until that URL is confirmed.
6. Test parent sign-in, create Grade 3 and Grade 11 profiles, verify the destination routing, and confirm one guardian cannot read another guardian's profiles.

The ALS application remains usable without Supabase; until activation, this login page reports that cloud access is unavailable and existing study progress remains in the browser.
