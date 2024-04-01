"use client";
import { Credentials } from "@prisma/client";
import {
  DndContext,
  DragEndEvent,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { forwardRef, useState } from "react";
import DraggableCredentialList from "./draggableCredentialList";

function CredentialList({
  pid,
  credentials,
}: {
  pid: number;
  credentials: Credentials[];
}) {
  const [credentialItems, setCredentialItems] =
    useState<Credentials[]>(credentials);
  //https://docs.dndkit.com/presets/sortable
  const sensors = useSensors(useSensor(PointerSensor));
  const [activeId, setActiveId] = useState(null); //For drag overlay

  function handleDragStart(event) {
    const { active } = event;

    setActiveId(active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    // console.log(event);
    if (active.id !== over.id) {
      setCredentialItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    console.log(credentialItems);
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex items-center gap-4">
          <ul className="flex flex-column flex-wrap gap-4 w-full">
            {credentialItems !== null && (
              <SortableContext
                items={credentialItems}
                strategy={verticalListSortingStrategy}
              >
                {credentialItems.map((credential) => (
                  <DraggableCredentialList
                    key={credential.id}
                    credential={credential}
                  />
                ))}
              </SortableContext>
            )}
          </ul>
        </div>
        <DragOverlay>
          {activeId ? <OverlayItem id={activeId} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
export default CredentialList;
//https://docs.dndkit.com/presets/sortable
export const OverlayItem = forwardRef(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {id}
    </div>
  );
});
