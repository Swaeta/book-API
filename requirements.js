/*
book
  -ISBN             -string
  -title            -string
  -author           -[number]
  -language         -string
  -publication      -number
  -no of pages      -number 
  -category         -[string]

author
  -id               -number
  -name             -string
  -books            -[string]

publications
  -id               -number
  -name             -string
  -books            -[string]


-------APIs---------
Book
-GET
   -To get all books                                 (done)
   -To get specific book                             (done)
   -to get based on category                         (done)
   -to get based on author                           (done)

-POST
  -to add new book
  

-PUT
   -to update book details
   -to update/add new author

-DELETE
   - to delete the book
   -to delete author from book

Author 
-GET
   -To get all author                                  (done)
   -to get specific author                             (done)
   -list of all author based on book                   (done)


-POST
   -to add new author
-PUT
   -update author
-DELETE
  -delete an author


Publication
-GET
   -to get all publication                             (done) 
   -to get specific publication                        (done)
   -to get list of publication based on book           (done)

-POST
  -add new publication

-PUT
  -update publication 
  -to update new book


-DELETE
  -delete a from publication
  -delete publication 



*/