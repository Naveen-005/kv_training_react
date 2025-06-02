import type { Employee } from "../../store/employee/employee.types";
import baseApi from "../api";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query<Employee[],void>({
            query: () => '/employees',
            providesTags:['EMPLOYEES']
        }),
        getEmployee: builder.query<Employee,{id:number}>({
            query: ({id}) => `/employees/${id}`,
            providesTags:['EMPLOYEES']
        }),
        deleteEmployee: builder.mutation({
            query: ({id}) => ({
                url: `/employees/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        createEmployee: builder.mutation<Employee,Employee>({
            query:(payload) => ({
                url:'/employees',
                method: 'POST',
                body: payload
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        updateEmployee: builder.mutation({
            query:({payload,id}) => ({
                url:`/employees/${id}`,
                method: 'PUT',
                body: payload
            }),
            invalidatesTags: ['EMPLOYEES']
        })
    })
})

export const {  
    useGetEmployeeListQuery, 
    useDeleteEmployeeMutation, 
    useGetEmployeeQuery, 
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
} = employeeApi