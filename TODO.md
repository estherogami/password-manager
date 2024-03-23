# TODO LIST
1. New Project Page
- [ ] Preview image upload.
- [ ] Redirect when created & Show toast.
- [x] Show validation error messages.
- [x] Zod file validation picture.
- [ ] Edit project.
- [ ] File upload.
- [ ] Tags.
- [ ] Fix error if no image is uploaded, it should be an optional field.
- [ ] Show toast after redirect for success message

2. Project list (Dashboard)
- [ ] Search
- [ ] Autocomplete
- [ ] order 
- [x] List
- [ ] Show favourites first
- [x] Skeleton (preload) //Cant test this because local is too fast but created a skeleton
- [ ] add favorite

3. Project Credentials
- [x] Project info
- [ ] Credentials list
- [ ] Edit, add buttons
- [ ] 404 not found


4. Credentials (Builder)
- [x] Add credential
- [ ] Drag & Drop 
- [ ] Credential list context for updating between siblings

5. API & DB
- [x] Run a postgresql database server on local
- [ ] Add repo and tags to project
- [ ] CRUD project  
    - [x] Create
    - [x] GetAll
    - [x] GetById
    - [ ] Edit
    - [ ] Delete
- [ ] CRUD credentials
    - [x] Create
    - [ ] GetAll
    - [ ] GetById
    - [ ] Edit
    - [ ] Delete
- [x] DB Model & migration Prisma