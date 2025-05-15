# YourOnline.app Website

## Service Evolution Plan (v1.1.0)

### New Service Direction: "Done for You Coding"

Our services are evolving from basic website hosting to expertise-driven development partnerships that leverage AI technology while providing human oversight, strategic guidance, and implementation expertise.

### Key Value Propositions

1. **Speed & Adaptability**: Rapid development cycles that adapt to emerging tech breakthroughs
2. **AI Expertise**: Leveraging cutting-edge AI tools with expert human guidance
3. **Scalable Resources**: On-demand expertise without the cost of hiring full-time specialists
4. **Knowledge Transfer**: Training your team to use AI tools effectively alongside development
5. **Implementation Expertise**: Bridging the gap between AI possibilities and production-ready code

### Revised Service Tiers

#### 1. On-Demand Expertise (Hourly)
- Expert consultation and implementation
- AI-assisted coding and problem solving
- Team training sessions on AI-assisted development
- WhatsApp priority support
- Perfect for: Specific technical challenges, training sessions, and consulting needs

#### 2. Weekly Development Sprints
- Dedicated weekly development blocks
- Hosting included
- Staging environment with subdomain
- Daily standup meetings
- WhatsApp support
- Weekly planning and review sessions
- AI Agent setup and configuration
- Perfect for: Feature development, new product initiatives, and website overhauls

#### 3. Continuous Development Partnership (Monthly)
- Dedicated development team
- Full backend/frontend development
- Custom AI Agent development
- Enterprise hosting with scaling
- System architecture and planning
- Daily standups and weekly reviews
- On-call emergency support
- Knowledge transfer to internal teams
- Perfect for: Complex products, startups needing technical co-founders, and enterprise solutions

### Implementation Plan
1. Update pricing structure in `pricing.js`
2. Revise marketing copy on landing pages
3. Create new service description pages
4. Update testimonials to reflect new service direction
5. Redesign pricing component to emphasize value over features

## Svelte 5 Migration TODO List

### Component Upgrades

- [ ] **State Management**
  - [ ] Replace `export let` with `let { prop } = $props()` for component props
  - [ ] Replace local reactive variables with `$state()`
  - [ ] Replace custom stores with `$derived` and `$state` where appropriate
  - [ ] Update instances of `$: calculation` to use `$derived` 

- [ ] **Component Structure**
  - [ ] Replace `<script context="module">` with proper imports/exports
  - [ ] Update lifecycle hooks (onMount, onDestroy) with `$effect`
  - [ ] Update event handlers to use `on:event` syntax

- [ ] **Specific Components to Check**
  - [ ] `Accordion.svelte` - Partially converted, needs completion
  - [ ] Check form components for reactive bindings
  - [ ] Check any components using stores
  - [ ] Review components with complex reactivity

### Testing Updates

- [ ] Update test files to support new reactivity model
- [ ] Test all components with regressions

### Documentation

- [ ] Update component documentation to reflect Svelte 5 patterns
- [ ] Document migration decisions and patterns

### Verification Steps

1. For each component:
   - [ ] Convert props to use `$props()`
   - [ ] Convert local state to `$state()`
   - [ ] Replace computed values with `$derived`
   - [ ] Replace reactive statements with `$effect`
   - [ ] Update event handlers
   - [ ] Test functionality after conversion

### References

- [Svelte 5 Migration Guide](https://svelte.dev/docs/runes)
- [Svelte 5 Runes API](https://svelte.dev/docs/runes-api)