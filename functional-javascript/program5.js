 function checkUsersValid(goodUsers) {
	let submittedUsers = [];
	
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
		return submittedUsers.every((subUser) => {
 		 return goodUsers.some((goodUser) => {
		  return subUser.id === goodUser.id;
	})		   
      })
    touc };
    }
    
    module.exports = checkUsersValid

