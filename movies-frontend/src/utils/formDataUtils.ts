import { actorsCreationDTO } from "../actors/actorsmodel";

export default function convertActorToFormData(
  actor: actorsCreationDTO
): FormData {
  const formData = new FormData();

  formData.set("name", actor.name);
  if (actor.biography) {
    formData.set("biography", actor.biography);
  }

  if (actor.DateOfBirth) {
    formData.set("dateOfBirth", formatDate(actor.DateOfBirth));
  }

  if (actor.image) {
    formData.set("picture", actor.image);
  }
  console.log(formData, "from");
  return formData;
}

function formatDate(date: Date) {
  date = new Date(date);
  const format = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [{ value: month }, , { value: day }, , { value: year }] =
    format.formatToParts(date);

  return `${year}-${month}-${day}`;
}
