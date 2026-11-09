

export default async function DrivePage({ params }) {
  const { folderId } = await params;
  console.log(folderId);

  // backend call for folderId data

  return (
    <div>
      DRIVE PAGE
      <p>{JSON.stringify(folderId)}</p>
    </div>
  );
}
