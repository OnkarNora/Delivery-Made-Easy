import React from 'react'

function NewDelivery() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle" >
            <form >
                <div class="row justify-content-center align-items-center">
                    <div class="form-group col-md-12">
                        <label for="inputEmail4">Name of item</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="pizza"></input>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputEmail4">Weight</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Weight"></input>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="inputPassword4">Points</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Points"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">From</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="From"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">To</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="To"></input>
                    </div>
                </div>
                <center>
                    <button type="submit" class="submit btn btn-primary ">
                        Sign In <i class="icon-angle-right"></i>
                    </button>
                </center>
            </form>
        </div>
    )
}

export default NewDelivery