import DashboardTitle from "@/components/common/DashboardTitle";
import AddTeacherForm from "@/components/layouts/dashboard/Teachers/AddTeacherForm";

const CreateTeacherPage = () => {
  return (
    <div className="space-y-6 p-4">
      <DashboardTitle
        title="Tambah Guru"
        description="Isi form berikut untuk menambahkan guru baru"
        action={{
          label: "Kembali ke Daftar Guru",
          href: "/dashboard/teachers",
        }}
      />

      <AddTeacherForm />
    </div>
  );
};
export default CreateTeacherPage;
