async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/StatList");
    if (!res.ok) {
        throw new Error("Sat Data Calling Fail");
    }
    return res.json();
}
export default async function StatList() {
    const data = await getData();
    return (
        <section className=" bg-white py-10">
            <div className="container mx-auto px-6 md:px-0 lg:px-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8">
                    <div className=" shadow p-6 flex flex-col items-center rounded">
                        <div className=" w-14 h-14 bg-green-100 flex justify-center items-center rounded-lg my-2">
                            <svg
                                width="32"
                                height="28"
                                viewBox="0 0 40 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24.25 6.91669C24.25 9.2639 22.3472 11.1667 20 11.1667V12.6667C23.1756 12.6667 25.75 10.0923 25.75 6.91669H24.25ZM20 11.1667C17.6528 11.1667 15.75 9.2639 15.75 6.91669H14.25C14.25 10.0923 16.8244 12.6667 20 12.6667V11.1667ZM15.75 6.91669C15.75 4.56948 17.6528 2.66669 20 2.66669V1.16669C16.8244 1.16669 14.25 3.74105 14.25 6.91669H15.75ZM20 2.66669C22.3472 2.66669 24.25 4.56948 24.25 6.91669H25.75C25.75 3.74105 23.1756 1.16669 20 1.16669V2.66669ZM15 17.6667H25V16.1667H15V17.6667ZM25 26.1667H15V27.6667H25V26.1667ZM15 26.1667C12.6528 26.1667 10.75 24.2639 10.75 21.9167H9.25C9.25 25.0923 11.8244 27.6667 15 27.6667V26.1667ZM29.25 21.9167C29.25 24.2639 27.3472 26.1667 25 26.1667V27.6667C28.1756 27.6667 30.75 25.0923 30.75 21.9167H29.25ZM25 17.6667C27.3472 17.6667 29.25 19.5695 29.25 21.9167H30.75C30.75 18.741 28.1756 16.1667 25 16.1667V17.6667ZM15 16.1667C11.8244 16.1667 9.25 18.741 9.25 21.9167H10.75C10.75 19.5695 12.6528 17.6667 15 17.6667V16.1667Z"
                                    fill="#2D264B"
                                />
                                <path
                                    d="M12.9202 11.3144C12.6573 10.8921 12.1641 10.6667 11.6667 10.6667C9.59559 10.6667 7.91666 8.98775 7.91666 6.91669C7.91666 4.84562 9.59559 3.16669 11.6667 3.16669C12.1641 3.16669 12.6573 2.94123 12.9202 2.51893C12.9319 2.50025 12.9435 2.48163 12.9553 2.46305C13.393 1.7722 13.1712 0.794021 12.3583 0.704526C12.1312 0.679522 11.9004 0.666687 11.6667 0.666687C8.21488 0.666687 5.41666 3.46491 5.41666 6.91669C5.41666 10.3685 8.21488 13.1667 11.6667 13.1667C11.9004 13.1667 12.1312 13.1539 12.3583 13.1288C13.1712 13.0394 13.393 12.0612 12.9553 11.3703C12.9436 11.3517 12.9319 11.3331 12.9202 11.3144Z"
                                    fill="#2D264B"
                                />
                                <path
                                    d="M7.84714 24.5281C7.65794 24.2125 7.32398 24 6.95597 24H6.66666C4.59559 24 2.91666 22.3211 2.91666 20.25C2.91666 18.179 4.59559 16.5 6.66666 16.5H6.95597C7.32398 16.5 7.65794 16.2876 7.84714 15.9719C8.30897 15.2014 7.8078 14 6.90948 14H6.66666C3.21488 14 0.416656 16.7982 0.416656 20.25C0.416656 23.7018 3.21488 26.5 6.66666 26.5H6.90948C7.8078 26.5 8.30897 25.2986 7.84714 24.5281Z"
                                    fill="#2D264B"
                                />
                                <path
                                    d="M27.0447 11.3703C26.607 12.0612 26.8287 13.0394 27.6417 13.1288C27.8688 13.1539 28.0995 13.1667 28.3333 13.1667C31.7851 13.1667 34.5833 10.3685 34.5833 6.91669C34.5833 3.46491 31.7851 0.666687 28.3333 0.666687C28.0995 0.666687 27.8688 0.679522 27.6417 0.704526C26.8287 0.794022 26.607 1.7722 27.0447 2.46305C27.0564 2.48162 27.0681 2.50025 27.0798 2.51893C27.3426 2.94123 27.8359 3.16669 28.3333 3.16669C30.4044 3.16669 32.0833 4.84562 32.0833 6.91669C32.0833 8.98775 30.4044 10.6667 28.3333 10.6667C27.8359 10.6667 27.3426 10.8921 27.0798 11.3144C27.0681 11.3331 27.0564 11.3517 27.0447 11.3703Z"
                                    fill="#2D264B"
                                />
                                <path
                                    d="M32.1528 24.5281C31.691 25.2987 32.1922 26.5 33.0905 26.5H33.3333C36.7851 26.5 39.5833 23.7018 39.5833 20.25C39.5833 16.7982 36.7851 14 33.3333 14H33.0905C32.1922 14 31.691 15.2014 32.1528 15.9719C32.342 16.2876 32.676 16.5 33.044 16.5H33.3333C35.4044 16.5 37.0833 18.179 37.0833 20.25C37.0833 22.3211 35.4044 24 33.3333 24H33.044C32.676 24 32.342 24.2125 32.1528 24.5281Z"
                                    fill="#2D264B"
                                />
                            </svg>
                        </div>
                        <h3 className=" text-3xl font-semibold py-2">
                            {data["followers"]}
                        </h3>
                        <p className=" text-base font-medium">Followers</p>
                    </div>
                    <div className=" shadow p-6 flex flex-col items-center rounded">
                        <div className=" w-14 h-14 bg-green-100 flex justify-center items-center rounded-lg my-2">
                            <svg
                                width="32"
                                height="28"
                                viewBox="0 0 32 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 11.6667C1 9.3655 2.86548 7.50002 5.16667 7.50002C7.46785 7.50002 9.33333 9.3655 9.33333 11.6667V25C9.33333 27.3012 7.46785 29.1667 5.16667 29.1667C2.86548 29.1667 1 27.3012 1 25V11.6667Z"
                                    stroke="#2D264B"
                                    stroke-width="1.5"
                                />
                                <path
                                    d="M15.2924 2.81661L11.5748 8.85764C10.5767 10.4796 10.0776 11.2906 9.77584 12.1793C9.68379 12.4504 9.60578 12.726 9.5421 13.0051C9.33333 13.9202 9.33333 14.8724 9.33333 16.7768V22.5C9.33333 26.1819 12.3181 29.1667 16 29.1667H20.8497C24.0062 29.1667 26.8917 27.3833 28.3033 24.5601L30.2175 20.7317C32.1084 16.9498 29.3583 12.5 25.13 12.5H23.9804C21.0988 12.5 18.8952 9.93147 19.3333 7.08335L19.7384 4.45039C19.9636 2.9867 18.8311 1.66669 17.3502 1.66669C16.5111 1.66669 15.7321 2.10199 15.2924 2.81661Z"
                                    stroke="#2D264B"
                                    stroke-width="1.5"
                                />
                            </svg>
                        </div>
                        <h3 className=" text-3xl font-semibold py-2">
                            {data["solved"]}
                        </h3>
                        <p className=" text-base font-medium">
                            Solved Problems
                        </p>
                    </div>
                    <div className=" shadow p-6 flex flex-col items-center rounded">
                        <div className=" w-14 h-14 bg-green-100 flex justify-center items-center rounded-lg my-2">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.66671 21.3333C10.7778 23.4762 14 26.3333 18 26.3333C22 26.3333 25.2223 23.4762 26.3334 21.3333M34.6667 18C34.6667 27.2047 27.2048 34.6666 18 34.6666C8.79529 34.6666 1.33337 27.2047 1.33337 18C1.33337 8.79523 8.79529 1.33331 18 1.33331C27.2048 1.33331 34.6667 8.79523 34.6667 18Z"
                                    stroke="#2D264B"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M14.6667 11.3333C14.6667 12.2538 13.9205 13 13 13C12.0796 13 11.3334 12.2538 11.3334 11.3333C11.3334 10.4128 12.0796 9.66663 13 9.66663C13.9205 9.66663 14.6667 10.4128 14.6667 11.3333Z"
                                    fill="#2D264B"
                                />
                                <path
                                    d="M24.6667 11.3333C24.6667 12.2538 23.9205 13 23 13C22.0796 13 21.3334 12.2538 21.3334 11.3333C21.3334 10.4128 22.0796 9.66663 23 9.66663C23.9205 9.66663 24.6667 10.4128 24.6667 11.3333Z"
                                    fill="#2D264B"
                                />
                            </svg>
                        </div>
                        <h3 className=" text-3xl font-semibold py-2">
                            {data["customers"]}
                        </h3>
                        <p className=" text-base font-medium">
                            Happy Customers
                        </p>
                    </div>
                    <div className=" shadow p-6 flex flex-col items-center rounded">
                        <div className=" w-14 h-14 bg-green-100 flex justify-center items-center rounded-lg my-2">
                            <svg
                                width="32"
                                height="28"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 22.6667H0.25H1ZM1.75 21C1.75 20.5858 1.41421 20.25 1 20.25C0.585786 20.25 0.25 20.5858 0.25 21H1.75ZM11 31.75C11.4142 31.75 11.75 31.4142 11.75 31C11.75 30.5858 11.4142 30.25 11 30.25V31.75ZM9.33333 31V30.25V31ZM11 1.75C11.4142 1.75 11.75 1.41421 11.75 1C11.75 0.585787 11.4142 0.25 11 0.25V1.75ZM0.25 11C0.25 11.4142 0.585787 11.75 1 11.75C1.41421 11.75 1.75 11.4142 1.75 11H0.25ZM31 9.33333H30.25H31ZM30.25 11C30.25 11.4142 30.5858 11.75 31 11.75C31.4142 11.75 31.75 11.4142 31.75 11H30.25ZM21 0.25C20.5858 0.25 20.25 0.585786 20.25 1C20.25 1.41421 20.5858 1.75 21 1.75V0.25ZM22.6667 1V0.25V1ZM22.6667 31V30.25V31ZM21 30.25C20.5858 30.25 20.25 30.5858 20.25 31C20.25 31.4142 20.5858 31.75 21 31.75V30.25ZM31.75 21C31.75 20.5858 31.4142 20.25 31 20.25C30.5858 20.25 30.25 20.5858 30.25 21H31.75ZM31 22.6667H31.75H31ZM1.75 22.6667L1.75 21H0.25L0.25 22.6667H1.75ZM11 30.25H9.33333V31.75H11V30.25ZM0.25 22.6667C0.25 27.6833 4.31675 31.75 9.33333 31.75V30.25C5.14518 30.25 1.75 26.8548 1.75 22.6667H0.25ZM9.33333 1.75H11V0.25H9.33333V1.75ZM1.75 11V9.33333H0.25V11H1.75ZM9.33333 0.25C4.31675 0.25 0.25 4.31675 0.25 9.33333H1.75C1.75 5.14517 5.14517 1.75 9.33333 1.75V0.25ZM30.25 9.33333V11H31.75V9.33333H30.25ZM21 1.75L22.6667 1.75V0.25L21 0.25V1.75ZM31.75 9.33333C31.75 4.31675 27.6833 0.25 22.6667 0.25V1.75C26.8548 1.75 30.25 5.14517 30.25 9.33333H31.75ZM22.6667 30.25H21V31.75H22.6667V30.25ZM30.25 21V22.6667H31.75V21H30.25ZM22.6667 31.75C27.6833 31.75 31.75 27.6833 31.75 22.6667H30.25C30.25 26.8548 26.8548 30.25 22.6667 30.25V31.75ZM9.33333 11.9167C8.52646 11.9167 7.99675 11.9151 7.60448 11.8623C7.23379 11.8125 7.09999 11.7297 7.01849 11.6482L5.95783 12.7088C6.36448 13.1155 6.86759 13.2768 7.40461 13.349C7.92006 13.4183 8.56886 13.4167 9.33333 13.4167V11.9167ZM5.25 9.33333C5.25 10.0978 5.24841 10.7466 5.31771 11.2621C5.38991 11.7991 5.55117 12.3022 5.95783 12.7088L7.01849 11.6482C6.93698 11.5667 6.85417 11.4329 6.80433 11.0622C6.75159 10.6699 6.75 10.1402 6.75 9.33333H5.25ZM11.9167 9.33333C11.9167 10.1402 11.9151 10.6699 11.8623 11.0622C11.8125 11.4329 11.7297 11.5667 11.6482 11.6482L12.7088 12.7088C13.1155 12.3022 13.2768 11.7991 13.349 11.2621C13.4183 10.7466 13.4167 10.0978 13.4167 9.33333H11.9167ZM9.33333 13.4167C10.0978 13.4167 10.7466 13.4183 11.2621 13.349C11.7991 13.2768 12.3022 13.1155 12.7088 12.7088L11.6482 11.6482C11.5667 11.7297 11.4329 11.8125 11.0622 11.8623C10.6699 11.9151 10.1402 11.9167 9.33333 11.9167V13.4167ZM9.33333 6.75C10.1402 6.75 10.6699 6.75159 11.0622 6.80433C11.4329 6.85417 11.5667 6.93698 11.6482 7.01849L12.7088 5.95783C12.3022 5.55117 11.7991 5.38991 11.2621 5.31771C10.7466 5.24841 10.0978 5.25 9.33333 5.25V6.75ZM13.4167 9.33333C13.4167 8.56886 13.4183 7.92006 13.349 7.40461C13.2768 6.86759 13.1155 6.36448 12.7088 5.95783L11.6482 7.01849C11.7297 7.09999 11.8125 7.23379 11.8623 7.60448C11.9151 7.99675 11.9167 8.52646 11.9167 9.33333H13.4167ZM9.33333 5.25C8.56886 5.25 7.92006 5.24841 7.40461 5.31771C6.86759 5.38991 6.36448 5.55117 5.95783 5.95783L7.01849 7.01849C7.09999 6.93698 7.23379 6.85417 7.60448 6.80433C7.99675 6.75159 8.52646 6.75 9.33333 6.75V5.25ZM6.75 9.33333C6.75 8.52646 6.75159 7.99675 6.80433 7.60448C6.85417 7.23379 6.93698 7.09999 7.01849 7.01849L5.95783 5.95783C5.55117 6.36448 5.38991 6.86759 5.31771 7.40461C5.24841 7.92006 5.25 8.56886 5.25 9.33333H6.75ZM9.33333 25.25C8.52646 25.25 7.99675 25.2484 7.60448 25.1957C7.23379 25.1458 7.09999 25.063 7.01849 24.9815L5.95783 26.0422C6.36448 26.4488 6.86759 26.6101 7.40461 26.6823C7.92006 26.7516 8.56886 26.75 9.33333 26.75V25.25ZM5.25 22.6667C5.25 23.4311 5.24841 24.0799 5.31771 24.5954C5.38991 25.1324 5.55117 25.6355 5.95783 26.0422L7.01849 24.9815C6.93698 24.9 6.85417 24.7662 6.80433 24.3955C6.75159 24.0033 6.75 23.4735 6.75 22.6667H5.25ZM11.9167 22.6667C11.9167 23.4735 11.9151 24.0033 11.8623 24.3955C11.8125 24.7662 11.7297 24.9 11.6482 24.9815L12.7088 26.0422C13.1155 25.6355 13.2768 25.1324 13.349 24.5954C13.4183 24.0799 13.4167 23.4311 13.4167 22.6667H11.9167ZM9.33333 26.75C10.0978 26.75 10.7466 26.7516 11.2621 26.6823C11.7991 26.6101 12.3022 26.4488 12.7088 26.0422L11.6482 24.9815C11.5667 25.063 11.4329 25.1458 11.0622 25.1957C10.6699 25.2484 10.1402 25.25 9.33333 25.25V26.75ZM9.33333 20.0833C10.1402 20.0833 10.6699 20.0849 11.0622 20.1377C11.4329 20.1875 11.5667 20.2703 11.6482 20.3518L12.7088 19.2912C12.3022 18.8845 11.7991 18.7232 11.2621 18.651C10.7466 18.5817 10.0978 18.5833 9.33333 18.5833V20.0833ZM13.4167 22.6667C13.4167 21.9022 13.4183 21.2534 13.349 20.7379C13.2768 20.2009 13.1155 19.6978 12.7088 19.2912L11.6482 20.3518C11.7297 20.4333 11.8125 20.5671 11.8623 20.9378C11.9151 21.3301 11.9167 21.8598 11.9167 22.6667H13.4167ZM9.33333 18.5833C8.56886 18.5833 7.92006 18.5817 7.40461 18.651C6.86759 18.7232 6.36448 18.8845 5.95783 19.2912L7.01849 20.3518C7.09999 20.2703 7.23379 20.1875 7.60448 20.1377C7.99675 20.0849 8.52646 20.0833 9.33333 20.0833V18.5833ZM6.75 22.6667C6.75 21.8598 6.75159 21.3301 6.80433 20.9378C6.85417 20.5671 6.93698 20.4333 7.01849 20.3518L5.95783 19.2912C5.55117 19.6978 5.38991 20.2009 5.31771 20.7379C5.24841 21.2534 5.25 21.9022 5.25 22.6667H6.75ZM22.6667 25.25C21.8598 25.25 21.3301 25.2484 20.9378 25.1957C20.5671 25.1458 20.4333 25.063 20.3518 24.9815L19.2912 26.0422C19.6978 26.4488 20.2009 26.6101 20.7379 26.6823C21.2534 26.7516 21.9022 26.75 22.6667 26.75V25.25ZM18.5833 22.6667C18.5833 23.4311 18.5817 24.0799 18.651 24.5954C18.7232 25.1324 18.8845 25.6355 19.2912 26.0422L20.3518 24.9815C20.2703 24.9 20.1875 24.7662 20.1377 24.3955C20.0849 24.0033 20.0833 23.4735 20.0833 22.6667H18.5833ZM25.25 22.6667C25.25 23.4735 25.2484 24.0033 25.1957 24.3955C25.1458 24.7662 25.063 24.9 24.9815 24.9815L26.0422 26.0422C26.4488 25.6355 26.6101 25.1324 26.6823 24.5954C26.7516 24.0799 26.75 23.4311 26.75 22.6667H25.25ZM22.6667 26.75C23.4311 26.75 24.0799 26.7516 24.5954 26.6823C25.1324 26.6101 25.6355 26.4488 26.0422 26.0422L24.9815 24.9815C24.9 25.063 24.7662 25.1458 24.3955 25.1957C24.0033 25.2484 23.4735 25.25 22.6667 25.25V26.75ZM22.6667 20.0833C23.4735 20.0833 24.0033 20.0849 24.3955 20.1377C24.7662 20.1875 24.9 20.2703 24.9815 20.3518L26.0422 19.2912C25.6355 18.8845 25.1324 18.7232 24.5954 18.651C24.0799 18.5817 23.4311 18.5833 22.6667 18.5833V20.0833ZM26.75 22.6667C26.75 21.9022 26.7516 21.2534 26.6823 20.7379C26.6101 20.2009 26.4488 19.6978 26.0422 19.2912L24.9815 20.3518C25.063 20.4333 25.1458 20.5671 25.1957 20.9378C25.2484 21.3301 25.25 21.8598 25.25 22.6667H26.75ZM22.6667 18.5833C21.9022 18.5833 21.2534 18.5817 20.7379 18.651C20.2009 18.7232 19.6978 18.8845 19.2912 19.2912L20.3518 20.3518C20.4333 20.2703 20.5671 20.1875 20.9378 20.1377C21.3301 20.0849 21.8598 20.0833 22.6667 20.0833V18.5833ZM20.0833 22.6667C20.0833 21.8598 20.0849 21.3301 20.1377 20.9378C20.1875 20.5671 20.2703 20.4333 20.3518 20.3518L19.2912 19.2912C18.8845 19.6978 18.7232 20.2009 18.651 20.7379C18.5817 21.2534 18.5833 21.9022 18.5833 22.6667H20.0833Z"
                                    fill="#2D264B"
                                />
                            </svg>
                        </div>
                        <h3 className=" text-3xl font-semibold py-2">
                            {data["projects"]}
                        </h3>
                        <p className=" text-base font-medium">Projects</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
