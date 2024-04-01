import {useSortable} from '@dnd-kit/sortable';
import { Credentials } from '@prisma/client';
import { MdOutlineDragIndicator } from "react-icons/md";
import { forwardRef} from "react";

function DraggableCredentialList({credential}: {credential: Credentials}) {
  //Sortable
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: credential.id});
    
  return (
    <li key={credential.id}
    ref={setNodeRef} //Draggable props
    {...attributes}
    {...listeners}
    className="p-5 w-full dark:bg-slate-800 bg-slate-200 rounded-md flex justify-between text-xl">
    <h2>{credential.title}</h2>
    <MdOutlineDragIndicator />
</li>
  )
}

export default DraggableCredentialList


//Overlay component when dragging
interface OverlayItemProps {
  id: number;
  credentials: Credentials[];
}

export const OverlayItem = forwardRef<HTMLDivElement, OverlayItemProps>(({ id, credentials }, ref) => {
  const overlayCredential = credentials.find(credential => credential.id === id);
  console.log(overlayCredential)

  return (
    <div  ref={ref}>
      {overlayCredential && overlayCredential.title}
    </div>
  );
});
OverlayItem.displayName = 'OverlayItem';