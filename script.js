$('#validateForm').bootstrapValidator({
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },

    fields: {
        taskName: {
            validators: {
                stringLength: {
                    min: 5,
                    message: 'Please Enter a task with minimum 5 letters length'
                },
                notEmpty: {
                    message: 'Please Enter task name'
                }
            }
        },
       
        taskDescription: {
            validators: {
                stringLength: {
                    min: 15,
                    max: 100,
                    message:'Please enter at least 5 characters and no more than 100'
                },
                notEmpty: {
                    message: 'Please Enter Task Description'
                }
            }
        },
        status: {
            validators: {
                notEmpty: {
                    message: 'A status is required'
                }
            }
        },

        date: {
            validators: {
                notEmpty: {
                    message: 'A date is required'
                }
            }
        },
        
        assignedTo: {
            validators: {
                notEmpty: {
                    message: 'Choose a team member'
                }
            }
        },
        
        }
    });