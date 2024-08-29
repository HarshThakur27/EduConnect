// import { toast } from "react-hot-toast"

// import { setUser } from "../../slices/profileSlice"
// import { apiConnector } from "../apiconnector"
// import { settingsEndpoints } from "../apis"
// import { logout } from "./authAPI"

// const {
//   UPDATE_DISPLAY_PICTURE_API,
//   UPDATE_PROFILE_API,
//   CHANGE_PASSWORD_API,
//   DELETE_PROFILE_API,
// } = settingsEndpoints

// export const updateDisplayPicture=(token, formData) => {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     try {
//       const response = await apiConnector(
//         "PUT",
//         UPDATE_DISPLAY_PICTURE_API,
//         formData,
//         {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         }
//       )
//       console.log(
//         "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
//         response
//       )

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//       toast.success("Display Picture Updated Successfully")
//       dispatch(setUser(response.data.data))
//     } catch (error) {
//       console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
//       toast.error("Could Not Update Display Picture")
//     }
//     toast.dismiss(toastId)
//   }
// }



// // export function updateProfile(token, formData) {
// //   return async (dispatch) => {
// //     const toastId = toast.loading("Updating Profile..."); // Changed loading message
// //     try {
// //       const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
// //         Authorization: `Bearer ${token}`,
// //       });

// //       console.log("UPDATE_PROFILE_API API RESPONSE:", response); // Log the entire response for debugging

// //       if (response.status === 200) { // Check for a successful response status
// //         const updatedUserDetails = response.data; // Assuming response contains updated user details
// //         dispatch(setUser(updatedUserDetails)); // Dispatch action to update user details
// //         toast.success("Profile Updated Successfully");
// //       } else {
// //         throw new Error("Failed to update profile. Please try again later."); // Throw an error for non-200 responses
// //       }
// //     } catch (error) {
// //       console.error("UPDATE_PROFILE_API API ERROR:", error); // Log detailed error message for debugging
// //       toast.error("Could Not Update Profile. Please try again later.");
// //     } finally {
// //       toast.dismiss(toastId); // Dismiss loading toast regardless of success or failure
// //     }
// //   };
// // }

// // export function updateProfile(token, formData) {
// //   return async (dispatch) => {
// //     const toastId = toast.loading("Updating Profile..."); // Changed loading message
// //     try {
// //       const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
// //         Authorization: `Bearer ${token}`,
// //       });

// //       console.log("UPDATE_PROFILE_API API RESPONSE:", response); // Log the entire response for debugging

// //       if (response.data && response.data.success) { // Check if response contains data and success field
// //         const updatedUserDetails = response.data; // Assuming response contains updated user details
// //         dispatch(setUser(updatedUserDetails)); // Dispatch action to update user details
// //         toast.success("Profile Updated Successfully");
// //       } else {
// //         throw new Error("Failed to update profile. Please try again later."); // Throw an error for non-success responses or missing data
// //       }
// //     } catch (error) {
// //       console.error("UPDATE_PROFILE_API API ERROR:", error); // Log detailed error message for debugging
// //       if (error.response) {
// //         console.error("UPDATE_PROFILE_API API ERROR RESPONSE:", error.response.data); // Log error response
// //       }
// //       toast.error("Could Not Update Profile. Please try again later.");
// //     } finally {
// //       toast.dismiss(toastId); // Dismiss loading toast regardless of success or failure
// //     }
// //   };
// // }



// export const updateProfile=(token, formData) => {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     try {
//       const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
//         Authorization: `Bearer ${token}`,
//       })
//       console.log("UPDATE_PROFILE_API API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//       const userImage = response.data.updatedUserDetails.image
//         ? response.data.updatedUserDetails.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
//       dispatch(
//         setUser({ ...response.data.updatedUserDetails, image: userImage })
//       )
//       toast.success("Profile Updated Successfully")
//     } catch (error) {
//       console.log("UPDATE_PROFILE_API API ERROR............", error)
//       toast.error("Could Not Update Profile")
//     }
//     toast.dismiss(toastId)
//   }
// }



// export const changePassword= async (token, formData) => {
//   const toastId = toast.loading("Loading...")
//   try {
//     const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
//       Authorization: `Bearer ${token}`,
//     })
//     console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

//     if (!response.data.success) {
//       throw new Error(response.data.message)
//     }
//     toast.success("Password Changed Successfully")
//   } catch (error) {
//     console.log("CHANGE_PASSWORD_API API ERROR............", error)
//     toast.error(error.response.data.message)
//   }
//   toast.dismiss(toastId)
// }

// export const deleteProfile=(token, navigate) => {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     try {
//       const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
//         Authorization: `Bearer ${token}`,
//       })
//       console.log("DELETE_PROFILE_API API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//       toast.success("Profile Deleted Successfully")
//       dispatch(logout(navigate))
//     } catch (error) {
//       console.log("DELETE_PROFILE_API API ERROR............", error)
//       toast.error("Could Not Delete Profile")
//     }
//     toast.dismiss(toastId)
//   }
// }



// module.exports = { 
//   updateProfile , 
//   deleteProfile ,
//   changePassword,
//   updateDisplayPicture ,
// }







import { toast } from "react-hot-toast"

import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { logout } from "./authAPI"

const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Display Picture Updated Successfully")
      dispatch(setUser(response.data.data))
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.updatedUserDetails.image
        ? response.data.updatedUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedUserDetails.firstName} ${response.data.updatedUserDetails.lastName}`
      dispatch(
        setUser({ ...response.data.updatedUserDetails, image: userImage })
      )
      toast.success("Profile Updated Successfully")
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
}

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}
