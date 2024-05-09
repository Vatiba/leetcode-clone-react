import { ProfileUpdateDto } from "entities/profile";
import api from "shared/api";
import { removeEmptyString, removeUndefined } from "shared/libs/helpers";

const ProfileActionApi = {
   updateProfile: async ({
      userId,
      ...others
   }: ProfileUpdateDto): Promise<void> => {
      console.log(removeEmptyString(removeUndefined(others)))
      const formData = new FormData();
      if (others.avatar)
         formData.append('avatar', others.avatar)
      if (others.company_name)
         formData.append('company_name', others.company_name)
      if (others.first_name)
         formData.append('first_name', others.first_name)
      if (others.last_name)
         formData.append('last_name', others.last_name)
      if (others.link_github)
         formData.append('link_github', others.link_github)
      if (others.link_gitlab)
         formData.append('link_gitlab', others.link_gitlab)
      if (others.link_linkedin)
         formData.append('link_linkedin', others.link_linkedin)
      if (others.link_stackoverflow)
         formData.append('link_stackoverflow', others.link_stackoverflow)
      if (others.location)
         formData.append('location', others.location?.toString())
      if (others.password?.trim())
         formData.append('password', others.password)
      if (others.phone)
         formData.append('phone', others.phone)
      if (others.school_number)
         formData.append('school_number', others.school_number)
      if (others.special_school)
         formData.append('special_school', others.special_school)
      if (others.university)
         formData.append('university', others.university?.toString())
      const res = await api.patch(`users/${userId}/`, {
         body: formData
      });
      return res.json();
   },
}

export default ProfileActionApi;