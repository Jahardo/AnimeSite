export function classNames(cls, mods={}, additional = []) {
   return [
       cls,
       ...Object.keys(mods).filter(cls=>mods[cls]),
       ...additional
   ].join(" ")
}