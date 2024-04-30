import { useAuth } from "entities/auth";
import { useGetProfile } from "entities/profile";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Container } from "shared";
// trash
import { EditLinks, EditProfileWidget } from "widgets/profile";

function EditProfile() {
   const { t } = useTranslation();
   const { data: authData } = useAuth();

   return (
      <Container className="my-3">
         <div
            className="flex flex-wrap items-start sm:flex-nowrap gap-3"
         >
            <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white py-3 px-3 rounded-md">
               <EditLinks />
            </div>
            <div className="flex flex-col w-full sm:w-1/2 md:w-2/3 lg:w-3/4 gap-2">
               <div className="flex flex-col bg-white w-full py-4 px-3 rounded-md">
                  <EditProfileWidget />
               </div>
            </div>
         </div>
      </Container>
   )
}

export default EditProfile