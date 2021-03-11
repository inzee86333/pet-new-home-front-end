export const urlRegister = "/unauthenticated/register"
export const urlLogin = "/"
export const urlForgetPassword = "/unauthenticated/forget_password"
export const urlSelectUserType = "/authenticated/select_user_type"
export const urlEditUser = "/authenticated/edit_user"
export const urlRolePart = (userType) => {
    if (userType === 'ow') {
        return urlListPetOwner
    } else if (userType === 'fi') {
        return urlListPetFinder
    } else if (userType === null) {
        return urlSelectUserType
    }
}
// owner
export const urlAddPet = "/authenticated/owner/add_pet"
export const urlListPetOwner = "/authenticated/owner/list_pet_owner"
export const urlDetailPet = (id) => {
    return `/authenticated/owner/edit_pet/${id}`
}
// finder
export const urlListPetFinder = "/authenticated/finder/list_pet_finder"
//admin 
export const urlReport = "/admin/report"
