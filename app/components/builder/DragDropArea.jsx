// import React from "react";
// import FieldWrapper from "./FieldWrapper";
// import { useFormStore } from "../../state/formStore";
// const DragDropArea = () => {
//   const fields = useFormStore((s) => s.fields);
//   const addField = useFormStore((s) => s.addField);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const fieldType = e.dataTransfer.getData("fieldType");
//     const newField = {
//       id: Date.now().toString(),
//       type: fieldType,
//       label: `${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} Field`,
//       placeholder: "",
//       required: false,
//     };
//     addField(newField);
//   };

//   const allowDrop = (e) => e.preventDefault();

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={allowDrop}
//       className="min-h-[500px] border-2 border-dashed border-gray-400 p-4 rounded bg-white"
//     >
//       {fields.length === 0 ? (
//         <p className="text-gray-500 text-center">Drag fields here</p>
//       ) : (
//         fields.map((field) => <FieldWrapper key={field.id} field={field} />)
//       )}
//     </div>
//   );
// };

// export default DragDropArea;


// import React from 'react'
// import { useFormStore } from '../../state/formStore'
// import {DndContext,closestCenter} from '@dnd-kit/core'
// import { SortableContext,verticalListSortingStrategy } from '@dnd-kit/sortable'
// import DraggableField from './DraggableField'
//   const DragDropArea = () => {
//   const fields = useFormStore((s) => s.fields);
//   const addField = useFormStore((s) => s.addField);
//   const reorderFields = useFormStore((s) => s.reorderFields);     const handleDrop = (e) => {
//         e.preventDefault();
//         const fieldType=e.dataTransfer.getData("fieldType");
//         if(fieldType){
//             addField({
//                 type: fieldType,
//                 id:Date.now(),label:`${fieldType} Field`,
//             })
//         }
//     }
//     const handleDragOver=(e)=>{
//         e.preventDefault();
//     }

//     const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (!over) return; // Prevent errors when dragging outside the container

//     reorderFields(active.id, over.id);
// };
//   return (
//     // <div   onDrop={handleDrop} onDragOver={handleDragOver} className='min-h-[500px] border-2 border-dashed border-gray-400 p-4 rounded bg-white'>
//     //     {fields.length===0?(
//     //         <p>drag fields here....</p>
//     //     ):(fields.map((field,index)=><FieldWrapper key={field.id} field={field} index={index}/>))}
//     //     </div>
// <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//     <SortableContext items={fields.map((field)=>field.id)} strategy={verticalListSortingStrategy}>
//         <div onDrop={handleDrop} onDragOver={handleDragOver} className='min-h-[500px] border-2 border-dashed border-gray-400 p-4 rounded bg-white'>
// {
//     fields.length===0?(<p>Drag fields here</p>):(
//         fields.map((field)=><DraggableField key={field.id} field={field} />)
//     )
// }
//         </div>
//     </SortableContext>
//      </DndContext>
//   )
// }

// export default DragDropArea



import React from 'react'
import { useFormStore } from '../../state/formStore'
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import DraggableField from './DraggableField'

const DragDropArea = () => {
  const fields = useFormStore((s) => s.fields);
  const addField = useFormStore((s) => s.addField);
  const reorderFields = useFormStore((s) => s.reorderFields);
const isBrowser = typeof window !== "undefined";

  const handleDrop = (e) => {
    e.preventDefault();
    const fieldType = e.dataTransfer.getData("fieldType");
    if (fieldType) {
      addField({
        type: fieldType,
        id: Date.now(),
        label: `${fieldType} Field`,
      });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    reorderFields(active.id, over.id);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={fields.map((field) => field.id)} strategy={verticalListSortingStrategy}>
        <div onDrop={handleDrop} onDragOver={handleDragOver} className='min-h-[500px] border-2 border-dashed border-gray-400 p-4 rounded bg-white'>
          {fields.length === 0 ? (
            <p>Drag fields here</p>
          ) : (
            fields.map((field) => <DraggableField key={field.id} field={field} />)
          )}
        </div>
      </SortableContext>
     </DndContext>
 
 
  );
}

export default DragDropArea