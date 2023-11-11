import { useContext, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FormContext } from 'modeled-forms-react';
import { RootFormFields } from "@/form-templates/root-form.template";


export function useRedirectToFirstInvalidNestedForm() {
  const formCtx = useContext(FormContext);
  if(!formCtx) throw new Error('useRedirectToFirstInvalidNestedForm() cannot be called outside of a FormContext provider.');

  const { useFirstNonValidFormElement } = formCtx;

  const firstNonValidFormElement = useFirstNonValidFormElement();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    router.prefetch('/addresses');
    router.prefetch('/programming-experience');
  }, [router]);

  useEffect(() => {
    switch(pathname) {
      case '/form-completed' :
        if(firstNonValidFormElement === RootFormFields.PROGRAMMING_EXPERIENCE) {
          router.push('/programming-experience');
        }
      /*
        lack of break statement is intentional, allowing each page to redirect to the first page
        containing a non-valid form
      */
      case '/programming-experience' :
        if(firstNonValidFormElement === RootFormFields.ADDRESSES) {
          router.push('/addresses');
        }
      case '/addresses' :
        if(firstNonValidFormElement === RootFormFields.CREDENTIALS) {
          router.push('/')
        }
        break;
    }
  }, [firstNonValidFormElement, pathname, router])
}
