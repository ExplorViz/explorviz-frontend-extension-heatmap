/**
 * Adds all clazzes of a component to the {@param clazzesArray}  
 */
export function getClazzList(component, clazzesArray){
  const children = component.get('children');
  const clazzes = component.get('clazzes');

  children.forEach((child) => {
    getClazzList(child, clazzesArray);
  });

  clazzes.forEach((clazz) => {
    clazzesArray.push(clazz);
  });
}