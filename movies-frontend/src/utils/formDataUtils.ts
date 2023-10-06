import { actorsCreationDTO } from "../actors/actorsmodel";

export default function convertActorToFormData(
  actor: actorsCreationDTO
): FormData {
  const formData = new FormData();

  formData.append("name", actor.name);
  if (actor.biography) {
    formData.append("biography", actor.biography);
  }

  if (actor.DateOfBirth) {
    formData.append("dateOfBirth", formatDate(actor.DateOfBirth));
  }

  if (actor.image) {
    formData.append("picture", actor.image);
  }
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
