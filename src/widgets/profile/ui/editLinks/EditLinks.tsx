import { useGetLinks } from "entities/profile";
import { useUpdateLinks } from "features/profile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaGitlab, FaLinkedin, FaStackOverflow } from "react-icons/fa6";
import { useParams } from "react-router-dom";

function EditLinks() {
   const params = useParams();
   const { t } = useTranslation();

   const {
      data: links,
      isLoading: linksLoading,
      isError: linksError,
   } = useGetLinks();
   const {
      mutate: updateLinks,
      isPending: updatingLinks,
   } = useUpdateLinks();

   const [githubLink, setGithubLink] = useState('');
   const [gitlabLink, setGitlabLink] = useState('');
   const [stackoverflowLink, setStackoverflowLink] = useState('');
   const [linkedinLink, setLinkedinLink] = useState('');

   useEffect(() => {
      if (!linksLoading && !linksError) {
         links?.results.forEach(item => {
            switch (item.type) {
               case "github":
                  setGithubLink(item.url)
                  break;
               case "gitlab":
                  setGitlabLink(item.url)
                  break;
               case "stackoverflow":
                  setStackoverflowLink(item.url)
                  break;
               case "linkedin":
                  setLinkedinLink(item.url)
                  break;
               default:
                  break;
            }
         })
      }
   }, [linksLoading, linksError]);

   const handleUpdateLinks = () => {
      if (githubLink !== links?.results.find(item => item.type === 'github')?.url) {
         updateLinks({ type: 'github', url: githubLink });
      }
      if (gitlabLink !== links?.results.find(item => item.type === 'gitlab')?.url) {
         updateLinks({ type: 'gitlab', url: gitlabLink });
      }
      if (stackoverflowLink !== links?.results.find(item => item.type === 'stackoverflow')?.url) {
         updateLinks({ type: 'stackoverflow', url: stackoverflowLink });
      }
      if (linkedinLink !== links?.results.find(item => item.type === 'linkedin')?.url) {
         updateLinks({ type: 'linkedin', url: linkedinLink });
      }
   }

   return (
      <div>
         <label className="form-control w-full">
            <div className="label">
               <span className="label-text">Github</span>
            </div>
            <label className="input input-sm input-bordered flex items-center gap-2">
               <FaGithub color='gray' />
               <input
                  className="grow bg-transparent outline-none"
                  type="text"
                  onChange={({ target: { value } }) => setGithubLink(value)}
                  value={githubLink}
               />
            </label>
         </label>
         <label className="form-control w-full">
            <div className="label">
               <span className="label-text">Gitlab</span>
            </div>
            <label className="input input-sm input-bordered flex items-center gap-2">
               <FaGitlab color='gray' />
               <input
                  className="grow bg-transparent outline-none"
                  type="text"
                  onChange={({ target: { value } }) => setGitlabLink(value)}
                  value={gitlabLink}
               />
            </label>
         </label>
         <label className="form-control w-full">
            <div className="label">
               <span className="label-text">Stackoverflow</span>
            </div>
            <label className="input input-sm input-bordered flex items-center gap-2">
               <FaStackOverflow color='gray' />
               <input
                  className="grow bg-transparent outline-none"
                  type="text"
                  onChange={({ target: { value } }) => setStackoverflowLink(value)}
                  value={stackoverflowLink}
               />
            </label>
         </label>
         <label className="form-control w-full">
            <div className="label">
               <span className="label-text">LinkedIn</span>
            </div>
            <label className="input input-sm input-bordered flex items-center gap-2">
               <FaLinkedin color='gray' />
               <input
                  className="grow bg-transparent outline-none"
                  type="text"
                  onChange={({ target: { value } }) => setLinkedinLink(value)}
                  value={linkedinLink}
               />
            </label>
         </label>

         <button
            className="mt-3 flex justify-center py-2 px-4 bg-green-500 hover:bg-green-600 rounded-md text-white font-bold"
            disabled={updatingLinks}
            onClick={() => handleUpdateLinks()}
         >
            {t('save')}
         </button>
      </div>
   )
}

export default EditLinks